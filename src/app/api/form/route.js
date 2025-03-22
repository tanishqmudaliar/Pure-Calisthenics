// src/app/api/form/submitForm/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email format",
        },
        { status: 400 }
      );
    }

    // Phone validation (basic)
    const phonePattern =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phonePattern.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone number format",
        },
        { status: 400 }
      );
    }

    // Format data for Google Sheets
    const formData = {
      name,
      email,
      phone,
      message,
    };

    // Replace with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    // Send data to Google Sheets
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // If you're using no-cors mode in production, you may not be able to check response.ok
    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting form",
      },
      { status: 500 }
    );
  }
}
