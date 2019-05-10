<?/* contactフォームのベース部分 */?>
<?php

// 変数の初期化
$page_flag = 0;
$clean = array();
$error = array();

// サニタイズ
if( !empty($_POST) ) {
	foreach( $_POST as $key => $value ) {
		$clean[$key] = htmlspecialchars( $value, ENT_QUOTES);
	} 
}
if( !empty($clean['btn_confirm']) ) {
	$error = validation($clean);

	if( empty($error) ) {
		$page_flag = 1;

		// セッションの書き込み
		session_start();
		$_SESSION['page'] = true;		
	}
} elseif( !empty($clean['btn_submit']) ) {
	session_start();
	if( !empty($_SESSION['page']) && $_SESSION['page'] === true ) {

		// セッションの削除
		unset($_SESSION['page']);
		$page_flag = 2;

		// 変数とタイムゾーンを初期化
		$header = null;
		$body = null;
		$admin_body = null;
		$auto_reply_subject = null;
		$auto_reply_text = null;
		$admin_reply_subject = null;
		$admin_reply_text = null;
		date_default_timezone_set('Asia/Tokyo');
		
		//日本語の使用宣言
		mb_language("ja");
		mb_internal_encoding("UTF-8");
	
		$header = "MIME-Version: 1.0\n";
		$header = "Content-Type: multipart/mixed;boundary=\"__BOUNDARY__\"\n";
		$header .= "From: さくぽん <sakupon730@gmeil.com>\n";
		$header .= "Reply-To: さくぽん <sakupon730@gmail.com>\n";
	
		// 件名を設定
		$auto_reply_subject = 'お問い合わせありがとうございます。';
	
		// 本文を設定
		$auto_reply_text = "この度は、お問い合わせ頂き誠にありがとうございます。下記の内容でお問い合わせを受け付けました。\n\n";
		$auto_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
		$auto_reply_text .= "お名前：" . $clean['your_name'] . "\n";
		$auto_reply_text .= "メールアドレス：" . $clean['email'] . "\n";
		$auto_reply_text .= "件名：" . $clean['ttl'] . "\n";	
		$auto_reply_text .= "お問い合わせ内容：" . nl2br($clean['contact']) . "\n\n";
		$auto_reply_text .= "サイト管理人 さくぽん";
		
		// テキストメッセージをセット
		$body = "--__BOUNDARY__\n";
		$body .= "Content-Type: text/plain; charset=\"ISO-2022-JP\"\n\n";
		$body .= $auto_reply_text . "\n";
		$body .= "--__BOUNDARY__\n";
		
		// 自動返信メール送信
		mb_send_mail( $clean['email'], $auto_reply_subject, $body, $header);
	
		// 運営側へ送るメールの件名
		$admin_reply_subject = "お問い合わせを受け付けました";
	
		// 本文を設定
		$admin_reply_text = "下記の内容でお問い合わせがありました。\n\n";
		$admin_reply_text .= "お問い合わせ日時：" . date("Y-m-d H:i") . "\n";
		$admin_reply_text .= "お名前：" . $clean['your_name'] . "\n";
		$admin_reply_text .= "メールアドレス：" . $clean['email'] . "\n";
		$auto_reply_text .= "件名：" . $clean['ttl'] . "\n";
		$admin_reply_text .= "お問い合わせ内容：" . nl2br($clean['contact']) . "\n\n";
		
		// テキストメッセージをセット
		$body = "--__BOUNDARY__\n";
		$body .= "Content-Type: text/plain; charset=\"ISO-2022-JP\"\n\n";
		$body .= $admin_reply_text . "\n";
		$body .= "--__BOUNDARY__\n";

		// 管理者へメール送信
		mb_send_mail( 'sakupon730@gmail.com', $admin_reply_subject, $body, $header);
		
	} else {
		$page_flag = 0;
	}	
}
function validation($data) {
	$error = array();
	// お名前のバリデーション
	if( empty($data['your_name']) ) {
		$error[] = "＊「お名前」は必ず入力してください。";
	} elseif( 20 < mb_strlen($data['your_name']) ) {
		$error[] = "＊「お名前」は20文字以内で入力してください。";
	}
	// メールアドレスのバリデーション
	if( empty($data['email']) ) {
		$error[] = "＊「メールアドレス」は必ず入力してください。";
	} elseif( !preg_match( '/^[0-9a-z_.\/?-]+@([0-9a-z-]+\.)+[0-9a-z-]+$/', $data['email']) ) {
		$error[] = "＊「メールアドレス」は正しい形式で入力してください。";
	}
	// お問い合わせ内容のバリデーション
	if( empty($data['contact']) ) {
		$error[] = "＊「お問い合わせ内容」は必ず入力してください。";
	}
	return $error;
}
?>