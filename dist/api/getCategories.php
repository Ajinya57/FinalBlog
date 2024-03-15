<?php
include_once("dbconn.php");

// 获取前端传递的 ID 参数
$categoryId = $_GET['id'];

// conn
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode("connect error");
    die('connect error: ' . $conn->connect_error);
}

// 需要防止sql注入
$sql = "SELECT b.id, b.title, b.date
        FROM blogs b
        INNER JOIN tags t ON b.tag_id = t.id
        INNER JOIN categories c ON t.category_id = c.id && c.id = '$_GET[id]'";

$categories = array();
if ($result = $conn->query($sql)) {
    while ($row = $result->fetch_assoc()) {
        $categories[] = $row;
    }
    $result->free_result();
}

$sql = "SELECT name FROM categories WHERE id = '$_GET[id]'";
$name = "";
if ($result = $conn->query($sql)) {
    $name = $result->fetch_assoc();
    $result->free_result();
}

echo json_encode(array("name" => $name, "blogs" => $categories));
$conn->close();
