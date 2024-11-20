<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
ini_set('post_max_size', '200M');
ini_set('upload_max_filesize', '200M');
ini_set('max_file_uploads', '60');
set_time_limit(2000);



if ($_FILES && isset($_FILES['talablmodir']) && $_FILES['talablmodir']['error'] === UPLOAD_ERR_OK) {
    // Récupérer les données du formulaire
    $nometablissement = isset($_POST['nometablissement']) ? $_POST['nometablissement'] : '';
    $nomfondateur = isset($_POST['nomfondateur']) ? $_POST['nomfondateur'] : '';
    $datecreation = isset($_POST['datecreation']) ? $_POST['datecreation'] : '';
    $cdetab = isset($_POST['cdetab']) ? $_POST['cdetab'] : '';
    $niveau = isset($_POST['niveau']) ? $_POST['niveau'] : '';
    $nomber = isset($_POST['nomber']) ? $_POST['nomber'] : '';
    $selectedDirectorate= isset($_POST['selectedDirectorate']) ? $_POST['selectedDirectorate'] : '';  
    $selectedCommune = isset($_POST['selectedCommune']) ? $_POST['selectedCommune'] : '';  
    $selectedCommuneCd = isset($_POST['selectedCommuneCd']) ? $_POST['selectedCommuneCd'] : '';
    $selectedCommuneMilieu = isset($_POST['selectedCommuneMilieu']) ? $_POST['selectedCommuneMilieu'] : '';
    $adress = isset($_POST['adress']) ? $_POST['adress'] : '';
    $nomcomp = isset($_POST['nomcomp']) ? $_POST['nomcomp'] : '';
    $datee = isset($_POST['datee']) ? $_POST['datee'] : '';
    $numbere = isset($_POST['numbere']) ? $_POST['numbere'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';

   
    // Récupérer le nom du fichier
  
    $talabFileName = isset($_FILES['talablmodir']['name']) ? $_FILES['talablmodir']['name'] : '';
    $cinFileName = isset($_FILES['cartecin']['name']) ? $_FILES['cartecin']['name'] : '';
    $noskhaFileName = isset($_FILES['noskhaijaza']['name']) ? $_FILES['noskhaijaza']['name'] : '';
    $tadrisFileName = isset($_FILES['momarasattadris']['name']) ? $_FILES['momarasattadris']['name'] : '';
    $cartunFileName = isset($_FILES['cart1']['name']) ? $_FILES['cart1']['name'] : '';
    $cartdFileName = isset($_FILES['cart2']['name']) ? $_FILES['cart2']['name'] : '';
    $carttFileName = isset($_FILES['cart3']['name']) ? $_FILES['cart3']['name'] : '';
    $cartkFileName = isset($_FILES['cart4']['name']) ? $_FILES['cart4']['name'] : '';
    $cartsFileName = isset($_FILES['cart5']['name']) ? $_FILES['cart5']['name'] : '';
    $cartsisFileName = isset($_FILES['cart6']['name']) ? $_FILES['cart6']['name'] : '';
    $cartsetFileName = isset($_FILES['cart7']['name']) ? $_FILES['cart7']['name'] : '';
    $cartoiutFileName = isset($_FILES['cart8']['name']) ? $_FILES['cart8']['name'] : '';
    $cartnefFileName = isset($_FILES['cart9']['name']) ? $_FILES['cart9']['name'] : '';
    $cartdixFileName = isset($_FILES['cart10']['name']) ? $_FILES['cart10']['name'] : '';

    $docAFileName = isset($_FILES['doc1']['name']) ? $_FILES['doc1']['name'] : '';
    $docBFileName = isset($_FILES['doc2']['name']) ? $_FILES['doc2']['name'] : '';
    $docCFileName = isset($_FILES['doc3']['name']) ? $_FILES['doc3']['name'] : '';
    $docDFileName = isset($_FILES['doc4']['name']) ? $_FILES['doc4']['name'] : '';
    $docEFileName = isset($_FILES['doc5']['name']) ? $_FILES['doc5']['name'] : '';
    $docFFileName = isset($_FILES['doc6']['name']) ? $_FILES['doc6']['name'] : '';
    $docGFileName = isset($_FILES['doc7']['name']) ? $_FILES['doc7']['name'] : '';
    $docHFileName = isset($_FILES['doc8']['name']) ? $_FILES['doc8']['name'] : '';
    $docIFileName = isset($_FILES['doc9']['name']) ? $_FILES['doc9']['name'] : '';
    $docJFileName = isset($_FILES['doc10']['name']) ? $_FILES['doc10']['name'] : '';
    $docmnFileName = isset($_FILES['doc11']['name']) ? $_FILES['doc11']['name'] : '';

    $doc12FileName = isset($_FILES['doc12']['name']) ? $_FILES['doc12']['name'] : '';
    $doc13FileName = isset($_FILES['doc13']['name']) ? $_FILES['doc13']['name'] : '';
    $doc14FileName = isset($_FILES['doc14']['name']) ? $_FILES['doc14']['name'] : '';
    $doc15FileName = isset($_FILES['doc15']['name']) ? $_FILES['doc15']['name'] : '';
    $doc16FileName = isset($_FILES['doc16']['name']) ? $_FILES['doc16']['name'] : '';
    $doc17FileName = isset($_FILES['doc17']['name']) ? $_FILES['doc17']['name'] : '';
    $doc18FileName = isset($_FILES['doc18']['name']) ? $_FILES['doc18']['name'] : '';
    $doc19FileName = isset($_FILES['doc19']['name']) ? $_FILES['doc19']['name'] : '';
    $doc20FileName = isset($_FILES['doc20']['name']) ? $_FILES['doc20']['name'] : '';
    $doc21FileName = isset($_FILES['doc21']['name']) ? $_FILES['doc21']['name'] : '';
    $doc22FileName = isset($_FILES['doc22']['name']) ? $_FILES['doc22']['name'] : '';
    $doc23FileName = isset($_FILES['doc23']['name']) ? $_FILES['doc23']['name'] : '';
    $doc24FileName = isset($_FILES['doc24']['name']) ? $_FILES['doc24']['name'] : '';
    
 
    // Connexion à la base de données
    $conn = new PDO("mysql:host=localhost;dbname=matestx", 'root', '');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO ecole (nometablissement, nomfondateur, datecreation, cdetab, niveau, nomber, selectedDirectorate, selectedCommune, selectedCommuneCd, selectedCommuneMilieu, adress, nomcomp, datee, numbere, email, talablmodir, cartecin, noskhaijaza,momarasattadris,cart1,cart2,cart3,cart4,cart5,cart6,cart7,cart8,cart9,cart10,doc1,doc2,doc3,doc4,doc5,doc6,doc7,doc8,doc9,doc10,doc11,doc12,doc13,doc14,doc15,doc16,doc17,doc18,doc19,doc20,doc21,doc22,doc23,doc24) 
    VALUES (:nometablissement, :nomfondateur, :datecreation, :cdetab, :niveau, :nomber, :selectedDirectorate, :selectedCommune, :selectedCommuneCd, :selectedCommuneMilieu, :adress, :nomcomp, :datee, :numbere, :email, :talablmodir, :cartecin, :noskhaijaza, :momarasattadris,:cart1,:cart2,:cart3,:cart4,:cart5,:cart6,:cart7,:cart8,:cart9,:cart10,:doc1,:doc2,:doc3,:doc4,:doc5,:doc6,:doc7,:doc8,:doc9,:doc10,:doc11,:doc12,:doc13,:doc14,:doc15,:doc16,:doc17,:doc18,:doc19,:doc20,:doc21,:doc22,:doc23,:doc24)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':nometablissement', $nometablissement);
    $stmt->bindParam(':nomfondateur', $nomfondateur);
    $stmt->bindParam(':datecreation', $datecreation);
    $stmt->bindParam(':cdetab', $cdetab);
    $stmt->bindParam(':niveau', $niveau);
    $stmt->bindParam(':nomber', $nomber);
    $stmt->bindParam(':selectedDirectorate', $selectedDirectorate);
    $stmt->bindParam(':selectedCommune', $selectedCommune);
    $stmt->bindParam(':selectedCommuneCd', $selectedCommuneCd);
    $stmt->bindParam(':selectedCommuneMilieu', $selectedCommuneMilieu);
    $stmt->bindParam(':adress', $adress);
    $stmt->bindParam(':nomcomp', $nomcomp);
    $stmt->bindParam(':datee', $datee);
    $stmt->bindParam(':numbere', $numbere);
    $stmt->bindParam(':email', $email);
    
    //$stmt->bindParam(':filecin', $fileName);
    $stmt->bindParam(':talablmodir', $talabFileName);
    $stmt->bindParam(':cartecin', $cinFileName);
    $stmt->bindParam(':noskhaijaza',  $noskhaFileName);
    $stmt->bindParam(':momarasattadris',$tadrisFileName);
    $stmt->bindParam(':cart1',  $cartunFileName);
    $stmt->bindParam(':cart2',  $cartdFileName);
    $stmt->bindParam(':cart3',  $carttFileName);
    $stmt->bindParam(':cart4',  $cartkFileName);
    $stmt->bindParam(':cart5',  $cartsFileName);
    $stmt->bindParam(':cart6',  $cartsisFileName);
    $stmt->bindParam(':cart7',  $cartsetFileName);
    $stmt->bindParam(':cart8',  $cartoiutFileName);
    $stmt->bindParam(':cart9',  $cartnefFileName);
    $stmt->bindParam(':cart10',  $cartdixFileName);

    $stmt->bindParam(':doc1', $docAFileName  );
    $stmt->bindParam(':doc2',   $docBFileName );
    $stmt->bindParam(':doc3',   $docCFileName   );
    $stmt->bindParam(':doc4',  $docDFileName );
    $stmt->bindParam(':doc5', $docEFileName);
    $stmt->bindParam(':doc6', $docFFileName  );
    $stmt->bindParam(':doc7', $docGFileName  );
    $stmt->bindParam(':doc8', $docHFileName );
    $stmt->bindParam(':doc9',  $docIFileName  );
    $stmt->bindParam(':doc10', $docJFileName);
    $stmt->bindParam(':doc11', $docmnFileName);

   
    $stmt->bindParam(':doc12',   $doc12FileName);
    $stmt->bindParam(':doc13',  $doc13FileName  );
    $stmt->bindParam(':doc14',  $doc14FileName );
    $stmt->bindParam(':doc15',  $doc15FileName);
    $stmt->bindParam(':doc16',  $doc16FileName  );
    $stmt->bindParam(':doc17',  $doc17FileName  );
    $stmt->bindParam(':doc18',  $doc18FileName );
    $stmt->bindParam(':doc19',  $doc19FileName  );
    $stmt->bindParam(':doc20',  $doc20FileName);
    $stmt->bindParam(':doc21',  $doc21FileName);
    $stmt->bindParam(':doc22',  $doc22FileName);
    $stmt->bindParam(':doc23',  $doc23FileName);
    $stmt->bindParam(':doc24',  $doc24FileName);
    
  
    $stmt->execute();






    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'No file uploaded or an error occurred.']);
}






foreach ($_FILES as $fieldName => $file) {
    if ($file['error'] === UPLOAD_ERR_OK) {
        // Récupérer le nom du fichier
        $fileName = isset($_FILES[$fieldName]['name']) ? $_FILES[$fieldName]['name'] : '';
        
        // Récupérer les données du formulaire
        $nometablissement = isset($_POST['nometablissement']) ? $_POST['nometablissement'] : '';

        // Spécifier le répertoire de téléchargement pour le fichier
        $uploadDirectory = '/xampp/xampnew/htdocs/pdf/' . $nometablissement.'' .''.$cdetab.'/';
        
        // Créer le répertoire s'il n'existe pas
        if (!file_exists($uploadDirectory)) {
            mkdir($uploadDirectory, 0777, true);
        }
        
        // Déplacer le fichier téléchargé vers le répertoire spécifié
        $filePath = $uploadDirectory . $fileName;
        if (move_uploaded_file($_FILES[$fieldName]['tmp_name'], $filePath)) {
            $success = true;
        } else {
            $success = false;
            break; // Arrêter la boucle en cas d'erreur de déplacement
        }
    }
}

// Envoyer la réponse JSON en fonction du succès ou de l'échec
if ($success) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Erreur lors du téléchargement des fichiers ou déplacement des fichiers.']);
}
?>