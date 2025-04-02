<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Email de destination
    $recipient = "ugo.tran@etu.inp-n7.fr";

    // Sujet de l'email
    $subject = "Nouveau message de $name via le portfolio";

    // Construction du contenu de l'email
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // En-têtes de l'email
    $email_headers = "From: $name <$email>";

    // Envoi de l'email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Une erreur est survenue, veuillez réessayer.";
    }
} else {
    echo "Une erreur est survenue, veuillez réessayer.";
}
?> 