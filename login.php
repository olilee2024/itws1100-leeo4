<?php
session_start();
include 'conn.php'; // Database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Query to check if user exists in the database
    $stmt = $conn->prepare("SELECT user_id, user_name, user_pwd, user_type FROM mySiteUsers WHERE user_name = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $user_name, $user_pwd, $user_type);
        $stmt->fetch();
        
        // Validate password
        if ($password === $user_pwd) {
            $_SESSION['user_id'] = $user_id;
            $_SESSION['user_name'] = $user_name;
            $_SESSION['user_type'] = $user_type;

            if ($user_type === 'admin') {
                header("Location: admin_dashboard.php");
            } else {
                header("Location: user_dashboard.php");
            }
            exit;
        } else {
            $error = "Invalid password. Please try again.";
        }
    } else {
        $error = "User not found. Please check your username.";
    }
    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html>
<head>
<link href = "../lab03/css/header.css" rel = "stylesheet" type = "text/css">
    <link href = "../lab03/css/main.css" rel = "stylesheet" type = "text/css">
    <link href = "../lab03/css/footer.css" rel = "stylesheet" type = "text/css">
    <title>Olivia Lee</title>
</head>
<body>
    <h2>Login to Your Account</h2>
    <form method="POST" action="">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        
        <button type="submit">Login</button>
    </form>

    <?php if (isset($error)) { echo "<p style='color:red;'>$error</p>"; } ?>
</body>
</html>