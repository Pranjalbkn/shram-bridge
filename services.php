<?php
// Start the session
session_start();

// Sample services data (in a real application, this could come from a database)
$services = [
    ['title' => 'Web Development', 'description' => 'Creating responsive and high-performance websites tailored to your needs.', 'image' => 'web-development.jpg'],
    ['title' => 'Graphic Design', 'description' => 'Designing visually appealing graphics that communicate your brand effectively.', 'image' => 'graphic-design.jpg'],
    ['title' => 'Digital Marketing', 'description' => 'Strategizing online marketing efforts to boost your business visibility.', 'image' => 'digital-marketing.jpg'],
    ['title' => 'Content Writing', 'description' => 'Crafting engaging content that resonates with your audience and drives results.', 'image' => 'content-writing.jpg'],
    ['title' => 'SEO Services', 'description' => 'Optimizing your website to rank higher in search engine results.', 'image' => 'seo-services.jpg'],
    ['title' => 'Mobile App Development', 'description' => 'Building user-friendly mobile applications for both iOS and Android.', 'image' => 'app-development.jpg'],
    ['title' => 'IT Consulting', 'description' => 'Providing expert advice to help you make informed IT decisions.', 'image' => 'it-consulting.jpg']
];

// Handle job application form submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['apply'])) {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $job_position = htmlspecialchars(trim($_POST['job_position']));

    // Email settings
    $to = "youremail@example.com"; // Replace with your email
    $subject = "New Job Application from $name";
    $message = "Name: $name\nEmail: $email\nPosition Applied: $job_position";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        $_SESSION['message'] = "Application submitted successfully!";
    } else {
        $_SESSION['message'] = "Failed to send application. Please try again.";
    }
    
    header("Location: services.php"); // Redirect to the same page
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Our Services</title>
</head>
<body>
    <div class="container">
        <h1>Our Services</h1>
        
        <?php
        // Display feedback message
        if (isset($_SESSION['message'])) {
            echo "<div class='alert'>" . $_SESSION['message'] . "</div>";
            unset($_SESSION['message']); // Clear the message after displaying
        }
        ?>
        
        <section class="service-section">
            <h2>Types of Services We Provide</h2>
            <div class="service-grid">
                <?php foreach ($services as $service): ?>
                    <div class="service-item">
                        <img src="<?php echo $service['image']; ?>" alt="<?php echo $service['title']; ?>">
                        <h3><?php echo $service['title']; ?></h3>
                        <p><?php echo $service['description']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="job-section">
            <h2>Full-Time Monthly Based Small Jobs</h2>
            <p>If you are interested in any of these positions, please fill out the form below:</p>
            <form method="POST" action="">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <select name="job_position" required>
                    <option value="">Select Job Position</option>
                    <option value="Virtual Assistant">Virtual Assistant</option>
                    <option value="Social Media Manager">Social Media Manager</option>
                    <option value="Data Entry Specialist">Data Entry Specialist</option>
                    <option value="Customer Support Representative">Customer Support Representative</option>
                    <option value="Content Moderator">Content Moderator</option>
                    <option value="Online Tutor">Online Tutor</option>
                </select>
                <button type="submit" name="apply">Apply</button>
            </form>
        </section>
    </div>
</body