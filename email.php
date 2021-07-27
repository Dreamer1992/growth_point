<?php
$to = "<dobro@anotr.ru>";

$subject = "Точка роста";

$headers = "Content-type: text/html; charset=windows-1251 \r\n";

if (isset($_POST["name"]) || isset($_POST["phone"])) {
    $name = "";
    $phone = "";

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    }

    if (isset($_POST['phone'])) {
        $date = $_POST['phone'];
    }

    echo $name . "<br>";
    echo $phone;
}

$message = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        
		<style type="text/css">
        @media only screen and (min-device-width: 601px) {.content {width: 600px !important;}}
		body[yahoo] .class {}
		.button {text-align: center; font-size: 18px; font-family: sans-serif; font-weight: bold; padding: 0 30px 0 30px;}
		.button a {color: #ffffff!important; text-decoration: none;}
		.button a:hover {text-decoration: underline;}

		@media only screen and (max-width: 550px), screen and (max-device-width: 550px) {}
		body[yahoo] .buttonwrapper {background-color: transparent!important;}
		body[yahoo] .button a {background-color: #e05443; padding: 15px 15px 13px!important; display: block!important;}
        </style>
    </head>
	
    <body yahoo bgcolor="#f6f8f1" style="margin: 0; padding: 0; min-width: 100%; background-color: #f6f8f1;">
     <!--[if (gte mso 9)|(IE)]>
	<table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
    <tr> <td><![endif]-->
	<table class="content" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px;">
					<!--Header-->
                        <tr>                         
                             <td bgcolor="#c7d8a7" style="padding: 40px 30px 20px 30px;">
								<!--Заглавие-->
								<!--[if (gte mso 9)|(IE)]>
								<table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
									<tr>
										<td>
										<![endif]-->
           
								 <table class="col425" align="left" border="0" cellpadding="0" style="width: 100%; max-width: 400px;">
									<tr>
										<td height="70">
											<table width="100%" border="0" cellspacing="0">
												<tr>
													<td style="padding: 0 0 0 3px; font-size: 20px; color: #ffffff; font-family: sans-serif; letter-spacing: 5px; font-weight: bold;">
													Детский сад
													</td>
												</tr>
												<tr>
													<td class="h1" style="padding: 5px 0 0 0; font-size: 33px; line-height: 38px; font-weight: bold; color: #153643; font-family: sans-serif;">
													Точка Роста
													</td>
												</tr>
											</table>
										</td>
									</tr>
								</table>
							<!--[if (gte mso 9)|(IE)]>
								</td>
							</tr>
							</table>
							<![endif]--><!--END-ЗАГЛАВИЕ-->

							</td>
						</tr>


					<!--ТЕЛО ПИСЬМА-->
						<tr>
							<td class="content" bgcolor="#ffffff" style="width: 100%; max-width: 600px; padding: 30px 30px 30px 30px; border-bottom: 1px solid #f2eeed;">
  
							  <table width="100%" border="0" cellspacing="0" cellpadding="0">
										
										<!--НАЧАЛО-->
										<tr>
											<td style="color: #153643; font-family: sans-serif; font-size: 16px; line-height: 22px;">
											   Имя
											</td>
											<td style="color: #153643; font-family: sans-serif; font-size: 16px; line-height: 22px;">
											   ' . $name . '
											</td>
										</tr>
										<tr>
											<td style="color: #153643; font-family: sans-serif; font-size: 16px; line-height: 22px;">
											   Телефон
											</td>
											<td style="color: #153643; font-family: sans-serif; font-size: 16px; line-height: 22px;">
											   ' . $hone . '
											</td>
										</tr>
										<!--/НАЧАЛО-->
										
								</table>
                            </td>
						 </tr>	
					
					
					<!--Footer-->
         				<tr>
						 <td class="footer" bgcolor="#44525f" style="padding: 20px 30px 15px 30px;">
									<table width="100%" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td align="center" style="font-family: sans-serif; font-size: 14px; color: #ffffff;">
												<a href="https://chastnyj-detskij-sad-stavropol.ru/"
												   target="_blank"
												   style="color: #ffffff; text-decoration: underline;">
												   Детский сад "Точка Роста"
												</a>
											</td>
										</tr>
									</table>
                <!--[if (gte mso 9)|(IE)]>
        </td>
    </tr>
</table>
<![endif]-->
    </body>
</html>
';

mail($to, $subject, $message, $headers);
?>