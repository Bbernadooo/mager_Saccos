<?php
// 1. Collect and Sanitize input data
$full_name = filter_var($_POST['full_name'], FILTER_SANITIZE_STRING);
$phone     = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
$subject   = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
$message   = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

// 2. Setup Email Details
$to          = "magersaccos@gmail.com"; // Your receiving email
$email_subject = "New Website Inquiry: " . $subject;

// 3. Create the Email Content (HTML format)
$email_body = "
    <h2>New Form Submission from Mager SACCOS Website</h2>
    <p><strong>Name:</strong> {$full_name}</p>
    <p><strong>Phone:</strong> {$phone}</p>
    <p><strong>Subject:</strong> {$subject}</p>
    <p><strong>Message:</strong><br>{$message}</p>
";

// 4. Set Headers (Important for deliverability)
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: notifications@magerwebsite.com" . "\r\n"; // Use an email from your domain

// 5. Send the mail
if(mail($to, $email_subject, $email_body, $headers)) {
    // Redirect back to a thank you page or show success
    echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
} else {
    echo "Error: Message could not be sent.";
}
?>