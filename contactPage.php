<?/* 確認用のページスタイル */?>
<?php if( $page_flag === 1 ): ?>

<form action="#contact" method="post">
    <div class="form-amt confir clearfix">
        <div class="con-block">
            <span class="label-req">必須</span>
            <label for="your_name">お名前</label>
        </div>
        <p><?php echo $clean['your_name']; ?></p>
    </div>

    <div class="form-amt confir clearfix">
        <div class="con-block">
            <span class="label-req">必須</span>
            <label for="email">メールアドレス</label>
        </div>
        <p><?php echo $clean['email']; ?></p>
    </div>

    <div class="form-amt confir clearfix">
        <div class="con-block">
            <span class="label-any">任意</span>
            <label for="ttl">件名</label>
        </div>
        <p><?php echo $clean['ttl']; ?></p>
    </div>

    <div class="form-amt confir clearfix">
        <div class="con-block">
            <span class="label-req">必須</span>
            <label for="contact">お問い合わせ内容</label>
        </div>
        <p><?php echo nl2br($clean['contact']); ?></p>
    </div>

    <section class="btn-flex">	
        <div class="submit-btn sideBySide form-amt">
            <input type="submit" name="btn_back" value="戻る">
        </div>
        <div class="submit-btn sideBySide form-amt">
            <input type="submit" name="btn_submit" value="送信">
        </div>
    </section>

    <input type="hidden" name="your_name" value="<?php echo $clean['your_name']; ?>">
    <input type="hidden" name="email" value="<?php echo $clean['email']; ?>">
    <input type="hidden" name="ttl" value="<?php echo $clean['ttl']; ?>">
    <input type="hidden" name="contact" value="<?php echo $clean['contact']; ?>">

</form>


<?/* 送信完了後のページスタイル */?>
<?php elseif( $page_flag === 2 ): ?>

<form action="#contact" method="">
    <section class="contactDone">
        <div class="box">
            <h4>Thank you for your inquiry !</h4>
            <p>
                送信が完了しました。入力したメールアドレスに確認用のメールを送信致しましたのでご確認ください。確認次第ご連絡しますので、もう少々お待ちください。
            </p>
        </div>

        <!-- <div class="backSite">
            <a href="./index.php">サイトに戻る</a>
        </div> -->
    </section>
</form>
<?php else: ?>




<?/* 必須項目が入力されなかった時の処理 */?>
<?php if( !empty($error) ): ?>
    <ul class="error_list">
    <?php foreach( $error as $value ): ?>
        <li><?php echo $value; ?></li>
    <?php endforeach; ?>
    </ul>
<?php endif; ?>



<?/* 読み込み直後のページスタイル */?>
<form method="post" action="#contact" enctype="multipart/form-data">
    <div class="element_wrap">
        <span class="label-req">必須</span>
        <label>お名前</label>
        <input type="text" name="your_name" placeholder="例）山田太郎" value="<?php if( !empty($clean['your_name']) ){ echo $clean['your_name']; } ?>">
    </div>
    <div class="element_wrap">
        <span class="label-req">必須</span>
        <label>メールアドレス</label>
        <input type="text" name="email" placeholder="例) example@example.com" value="<?php if( !empty($clean['email']) ){ echo $clean['email']; } ?>">
    </div>
    <div class="element_wrap">
        <span class="label-any">任意</span>
        <label>件名</label>
        <input type="text" name="ttl" placeholder="例）このサイトについて" value="<?php if( !empty($clean['ttl']) ){ echo $clean['ttl']; } ?>">
    </div>
    <div class="element_wrap">
        <span class="label-req">必須</span>
        <label>お問い合わせ内容</label>
        <textarea name="contact" placeholder="お問い合わせ内容を入力してください。"><?php if( !empty($clean['contact']) ){ echo $clean['contact']; } ?></textarea>
    </div>
    <div class="submit-btn form-amt">
        <input type="submit" name="btn_confirm" value="確認する">
    </div>
</form>


<?php endif; ?>
