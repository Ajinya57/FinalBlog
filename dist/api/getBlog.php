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
$sql = "SELECT b.id, b.title, b.date, b.abstract, t.name as tag, c.name as category
        FROM blogs b
        INNER JOIN tags t ON b.tag_id = t.id
        INNER JOIN categories c ON t.category_id = c.id WHERE b.id = '$_GET[id]'";

$categories = [];
if ($result = $conn->query($sql)) {
    while ($row = $result->fetch_assoc()) {
        $categories = $row;
    }
    $result->free_result();
}

echo json_encode(array("blog" => $categories));
$conn->close();
