<?php
include_once("dbconn.php");

// conn
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    echo json_encode("connect error");
    die('connect error: ' . $conn->connect_error);
}

$sql = "SELECT b.id, b.title, b.date, b.abstract, t.name as tag, c.name as category
        FROM blogs b
        INNER JOIN tags t ON b.tag_id = t.id
        INNER JOIN categories c ON t.category_id = c.id;
        SELECT id, name FROM tags;
        SELECT c.id AS category_id, c.name AS category_name, t.id AS tag_id, t.name AS tag_name
        FROM categories c
        LEFT JOIN tags t ON c.id = t.category_id
        ORDER BY c.id, t.id";

$blogs = array();
$tags = array();
$categories = array();
$totalBlogs = 0;
$count = 0;
if ($conn->multi_query($sql)) {
    do {
        // 处理每个查询的结果
        if ($result = $conn->store_result()) {
            if ($count == 0) {
                $totalBlogs = $result->num_rows;
                while ($row = $result->fetch_assoc()) {
                    $blogs[] = $row;
                }
            } else if ($count == 1) {
                while ($row = $result->fetch_assoc()) {
                    $tags[] = $row;
                }
            } else if ($count == 2) {
                while ($row = $result->fetch_assoc()) {
                    $category_id = $row['category_id'];
                    $category_name = $row['category_name'];
                    $tag_id = $row['tag_id'];
                    $tag_name = $row['tag_name'];

                    // 将标签添加到对应的分类中
                    if (!isset($categories[$category_name])) {
                        $categories[$category_name] = [$category_id, []];
                    }
                    if ($tag_id) {
                        $categories[$category_name][1][$tag_name] = $tag_id;
                    }
                }
            }
            $count++;
            $result->free_result();
        }
    } while ($conn->next_result());
}

$output = array(
    'totalBlogs' => $totalBlogs,
    'blogs' => $blogs,
    'tags' => $tags,
    'categories' => $categories
);

echo json_encode($output);

$conn->close();
