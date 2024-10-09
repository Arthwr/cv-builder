# Resume Builder

This is a small React-based project that allows users to create and fill in a work resume based on a design template inspired by [Rezi Resume Builder](https://resumebuild.rezi.ai/). The design is opinionated, meaning it only allows content changes, with no modifications to the layout or styling.

The primary goal of this project was to gain familiarity with the React library, along with forms and state management hooks in a practical setting.

The app is configured for screens up to 1024px and does not currently support mobile devices.

[Live View](https://arthwr.github.io/cv-builder)

## Features:
- **Customizable Resume Sections**: You can update sections like job experience, personal information, projects, education, and skills.
- **PDF Export**: It uses the third-party library [html2pdf](https://github.com/spipu/html2pdf) to generate a PDF from the resume by taking a canvas-like snapshot of the document.

## Preview:

![resumebuilder](https://github.com/user-attachments/assets/76d17c39-6f1f-47cf-9415-91700908c0f5)
