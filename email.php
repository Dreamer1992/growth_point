<?php
//$to = "<dobro@anotr.ru>";
$to = "<Ganiev.Davlet@yandex.ru>";

$subject = "Точка роста";

$headers = "Content-type: text/html; charset=UTF-8 \r\n";

if (isset($_POST["name"]) || isset($_POST["phone"])) {
    $name = "";
    $phone = "";

    if (isset($_POST['name'])) {
        $name = $_POST['name'];
    }

    if (isset($_POST['phone'])) {
        $phone = $_POST['phone'];
    }
}

$message = '
	<table class="content" align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px;">
                <!--Header-->
                    <tr>                         
                         <td bgcolor="#c7d8a7" style="padding: 40px 30px 20px 30px;">
                            <!--Заглавие-->
                            <table width="425" align="left" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td>
       
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
                            </td>
                        </tr>
                        </table>
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
                       ' . $phone . '
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
        </td>
    </tr>
</table>
';

mail($to, $subject, $message, $headers);
?>