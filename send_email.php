<?php
// 1. Point to the PHPMailer files you just uploaded
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// 2. Start the mailing process
$mail = new PHPMailer(true);

try {
    // --- SERVER SETTINGS (The "ID Card") ---
    $mail->isSMTP();                                      
    $mail->Host       = 'mail.magerwebsite.com';      // Your Yegara Mail Server
    $mail->SMTPAuth   = true;                             
    $mail->Username   = 'info@magerwebsite.com';      // Your official email
    $mail->Password   = 'YourEmailPasswordHere';      // Your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;      // High security
    $mail->Port       = 465;                              // Standard secure port

    // --- WHO IS SENDING AND RECEIVING ---
    $mail->setFrom('info@magerwebsite.com', 'Mager Website Form');
    $mail->addAddress('magersaccos@gmail.com');        // Where YOU receive the mail

    // --- THE EMAIL CONTENT ---
    $mail->isHTML(true);                                  
    $mail->Subject = 'New Inquiry: ' . $_POST['subject'];
    
    // Building a nice looking body
    $mail->Body    = "
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> {$_POST['full_name']}</p>
        <p><strong>Phone:</strong> {$_POST['phone']}</p>
        <p><strong>Subject:</strong> {$_POST['subject']}</p>
        <p><strong>Message:</strong><br>{$_POST['message']}</p>
    ";

    $mail->send();
    // Redirect back to your contact page with a success message
    echo "<script>alert('Thank you! Your message has been sent.'); window.location.href='contact.html';</script>";

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>