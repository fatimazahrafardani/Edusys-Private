<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
header('Access-Control-Allow-Origin: *');

$host = "localhost";
$user = "root";
$password = "";
$dbname = "matestx";
$db_conn_mysqli = mysqli_connect($host, $user, $password, $dbname);
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'GET':
        if (isset($_GET['action']) && $_GET['action'] === 'historique') {
            $sql = "SELECT * FROM historique";
        } elseif (isset($_GET['action']) && $_GET['action'] === 'updety') {
            $sql = "SELECT * FROM updety";
        } else {
            $sql = "SELECT * FROM ecole";
        }

        if (isset($_GET['id']) && is_numeric($_GET['id'])) {
            $ecoleId = $_GET['id'];
            $getEcoleRow = mysqli_query($db_conn_mysqli, "SELECT * FROM ecole WHERE id='$ecoleId'");
            $ecoleRow = mysqli_fetch_assoc($getEcoleRow);
            echo json_encode($ecoleRow);
            return;
        } else {
            $allEcoles = mysqli_query($db_conn_mysqli, "SELECT * FROM ecole");
            $ecoleData = array();
            while ($row = mysqli_fetch_assoc($allEcoles)) {
                $ecoleData[] = $row;
            }
            echo json_encode($ecoleData);
            return;
        }
        break;

    case 'POST':
        $input = file_get_contents('php://input');
        $data = json_decode($input, true);

        $nometablissement = $data['nometablissement'];
        $nomfondateur = $data['nomfondateur'];
        $datecreation = $data['datecreation'];


        $sql = "INSERT INTO ecole (nometablissement, nomfondateur, datecreation) VALUES (?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$nometablissement, $nomfondateur, $datecreation]); 

        $newId = $pdo->lastInsertId();

        $responseData = array(
            'id' => $newId,
            'nometablissement' => $nometablissement,
            'nomfondateur' => $nomfondateur,
            'datecreation' => $datecreation,  );
        echo json_encode($responseData);
        return;
        break;

    case 'DELETE':
        $id = $_GET['id'];
        $sql = "DELETE FROM ecole WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$id]);
        echo json_encode(["message" => "Ecole supprimée avec succès"]);
        return;
        break;
case 'PUT':
            $input = file_get_contents('php://input');
            $data = json_decode($input, true);
        
            // Vérification si l'ID de l'école est fourni
            if (!isset($data['id']) || !is_numeric($data['id'])) {
                http_response_code(400);
                echo json_encode(["error" => "ID de l'école invalide"]);
                return;
            }
        
            $id = $data['id'];
            $nometablissement = $data['nometablissement'];
            $nomfondateur = $data['nomfondateur'];
            $datecreation = $data['datecreation'];
            $cdetab = $data['cdetab'];
            $niveau = $data['niveau'];
        
            // Vérification et suppression des doublons
            $niveauArray = array_unique(explode(',', $niveau));
            $niveauUnique = implode(',', $niveauArray);
        
            // Mettre à jour la base de données avec la chaîne sans doublons
            $sql = "UPDATE ecole SET nometablissement = ?, nomfondateur = ?, datecreation = ? ,cdetab = ?, niveau = ? WHERE id = ?";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([$nometablissement, $nomfondateur, $datecreation, $cdetab, $niveauUnique, $id]); 
        
            // Vérification si la mise à jour a été effectuée avec succès
            if ($stmt->rowCount() === 0) {
                http_response_code(404);
                echo json_encode(["error" => "Aucune école trouvée avec cet ID"]);
                return;
            }
        
            $updatedData = [
                'id' => $id,
                'nometablissement' => $nometablissement,
                'nomfondateur' => $nomfondateur,
                'datecreation' => $datecreation,
                'cdetab' => $cdetab,
                'niveau' => $niveauArray, // Envoyer le tableau mis à jour
            ];
        
            echo json_encode($updatedData);
            return;
            break;      
        
    default:
        http_response_code(405);
        echo json_encode(["error" => "Méthode non autorisée"]);
}
?>
