<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <?php
      mb_language("Japanese");
      mb_internal_encoding("UTF-8");

      $name = $_POST['user-name'];
      $mail = $_POST['user-mail'];
      $msg = $_POST['inquiry'];

      if(mb_send_mail($name, $mail, $msg)){
        echo "メールを送信しました";
      } else {
        echo "メールの送信に失敗しました";
      };
    ?>
  </body>
</html>