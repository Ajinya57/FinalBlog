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
        FROM blogs b WHERE b.tag_id = '$_GET[id]'";

$tags = array();
if ($result = $conn->query($sql)) {
    while ($row = $result->fetch_assoc()) {
        $tags[] = $row;
    }
    $result->free_result();
}

$sql = "SELECT name FROM tags WHERE id = '$_GET[id]'";
$name = "";
if ($result = $conn->query($sql)) {
    $name = $result->fetch_assoc();
    $result->free_result();
}

echo json_encode(array("name" => $name, "blogs" => $tags));
$conn->close();
