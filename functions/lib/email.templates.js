const moment = require("./moment")
const generateURL = require("generate-google-calendar-url")

module.exports.reservationAcceptedTemplate = (reservationId, {name, from, to, tel, email, message, roomId, adults, children}) => {
  
  // Review UTC offset problem
  from = moment(from).hours(12).minutes(0)
  to = moment(to).hours(8).minutes(0)
  children = (children && children.length) ?  children.length : "0"
  message = message !== "" ? message : "-"

  const calendarLink = generateURL({
    start: from.clone().toDate(),
    end: to.clone().toDate(),
    title: 'Foglalás (Bíbic vendégházak)',
    location: 'Nagybajom, Bibic vendégházak, Iskola köz, Hungary',
    details: `
Foglalás azonosító: ${reservationId}

Szobaszám: ${roomId}
Megjegyzés: ${message}
Felnőtt: ${adults}
Gyerek: ${children}

szallasfoglalas@bibicvendeghazak.hu
    `
  })

  return `<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a,body{padding:0}.ExternalClass *,img{line-height:100%}.ExternalClass,.ReadMsgBody{width:100%}body{margin:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table,td{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0}img{border:0;height:auto;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}p{display:block;margin:13px 0}</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px){@-ms-viewport{width:320px}@viewport{width:320px}}</style><!--<![endif]--><!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]--><!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px){.mj-column-per-100{width:100%!important}}</style></head><body style="background:#FFF"><div itemscope itemtype="http://schema.org/LodgingReservation"><meta itemprop="reservationNumber" content="${reservationId}"><link itemprop="reservationStatus" href="http://schema.org/Confirmed"><div itemprop="underName" itemscope itemtype="http://schema.org/Person"><meta itemprop="name" content="${name}"></div><div itemprop="reservationFor" itemscope itemtype="http://schema.org/LodgingBusiness"><meta itemprop="name" content="Bíbic vendégházak"><div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><meta itemprop="streetAddress" content="Iskola köz"><meta itemprop="addressLocality" content="Nagybajom"><meta itemprop="addressRegion" content="HU"><meta itemprop="postalCode" content="7561"><meta itemprop="addressCountry" content="HU"></div><meta itemprop="telephone" content="+36 30 433 6698"></div><meta itemprop="checkinDate" content=">${from.toISOString()}"><meta itemprop="checkoutDate" content=">${to.toISOString()}"></div><div class="mj-container" style="background-color:#FFF"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="background:url(https://topolio.s3-eu-west-1.amazonaws.com/uploads/5ace578cb3982/1523475292.jpg) top center #1F1511;font-size:0;width:100%" border="0" background="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5ace578cb3982/1523475292.jpg"><tbody><tr><td><div style="margin:0 auto;max-width:600px"><!--[if mso | IE]>      <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;">        <v:fill origin="0.5, 0" position="0.5,0" type="tile" src="https://topolio.s3-eu-west-1.amazonaws.com/uploads/5ace578cb3982/1523475292.jpg" />        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:9px 0"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0"><div style="font-size:1px;line-height:24px;white-space:nowrap">&#xA0;</div></td></tr><tr><td style="word-wrap:break-word;font-size:0;padding:8px 20px" align="center"><div style="cursor:auto;color:#FFF;font-family:Helvetica,sans-serif;font-size:11px;line-height:22px;text-align:center"><h1 style="font-family:Cabin,sans-serif;color:#FFF;font-size:44px;line-height:100%">Foglalás elfogadva</h1></div></td></tr><tr><td style="word-wrap:break-word;font-size:0;padding:10px 25px 0px 25px" align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate" align="center" border="0"><tbody><tr><td style="border:none;border-radius:none;color:#fff;cursor:auto;padding:0px 25px 10px 25px" align="center" valign="middle" bgcolor="#b35d41"><a href="${calendarLink}" style="text-decoration:none;background:#b35d41;color:#fff;font-family:Ubuntu,Helvetica,Arial,sans-serif,Helvetica,Arial,sans-serif;font-size:13px;font-weight:400;line-height:120%;text-transform:none;margin:0" target="_blank">Hozzáadás a Google Naptárhoz</a></td></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table><!--[if mso | IE]>        </v:textbox>      </v:rect>      <![endif]--></div></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0 auto;max-width:600px"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:9px 0"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0;padding:0 20px" align="left"><div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:11px;line-height:22px;text-align:left"><table align="center" border="0" cellpadding="1" cellspacing="1" style="max-width:500px;width:100%"><thead><tr><th scope="col"><h3 style="line-height:100%"><strong>Foglal&#xF3; adatai</strong></h3></th><th scope="col"></th></tr></thead><tbody><tr><td><span style="font-size:14px">N&#xE9;v:</span></td><td style="text-align:right"><span style="font-size:14px">${name}</span></td></tr><tr><td><span style="font-size:14px">Telefonsz&#xE1;m:</span></td><td style="text-align:right"><span style="font-size:14px">${tel}</span></td></tr><tr><td><span style="font-size:14px">Szobaszám:</span></td><td style="text-align:right"><span style="font-size:14px">${roomId}</span></td></tr><tr><td><span style="font-size:14px">Felnőttek száma:</span></td><td style="text-align:right"><span style="font-size:14px">${adults}</span></td></tr><tr><td><span style="font-size:14px">Gyerekek száma:</span></td><td style="text-align:right"><span style="font-size:14px">${children}</span></td></tr><tr><td><span style="font-size:14px">&#xC9;rkez&#xE9;s</span></td><td style="text-align:right"><span style="font-size:14px">${from.format("LLL")}</span></td></tr><tr><td><span style="font-size:14px">T&#xE1;voz&#xE1;s</span></td><td style="text-align:right"><span style="font-size:14px">${to.format("LLL")}</span></td></tr><tr><td><span style="font-size:14px">Megjegyz&#xE9;s</span></td><td style="text-align:right"><span style="font-size:14px">${message}</span></td></tr></tbody></table><p></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]--><div style="margin:0 auto;max-width:600px"><table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0;width:100%" align="center" border="0"><tbody><tr><td style="text-align:center;vertical-align:top;direction:ltr;font-size:0;padding:9px 0"><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]--><div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%"><table role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td style="word-wrap:break-word;font-size:0;padding:20px 22px"><p style="font-size:1px;margin:0 auto;border-top:1px dashed #ACACAC;width:100%"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px dashed #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"></td></tr></table><![endif]--></td></tr><tr><td style="word-wrap:break-word;font-size:0;padding:10px 25px" align="center"><div><!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]--><table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table" align="center" border="0"><tbody><tr><td style="padding:4px;vertical-align:middle"><table role="presentation" cellpadding="0" cellspacing="0" style="background:0 0;border-radius:3px;width:35px" border="0"><tbody><tr><td style="vertical-align:middle;width:35px;height:35px"><a href="https://www.facebook.com/B%C3%ADbic-Vend%C3%A9gh%C3%A1zak-200199203718517"><img alt="facebook" height="35" src="https://s3-eu-west-1.amazonaws.com/ecomail-assets/editor/social-icos/rounded/facebook.png" style="display:block;border-radius:3px" width="35"></a></td></tr></tbody></table></td><td style="padding:4px 4px 4px 0;vertical-align:middle"><a href="https://www.facebook.com/B%C3%ADbic-Vend%C3%A9gh%C3%A1zak-200199203718517" style="text-decoration:none;text-align:left;display:block;color:#333;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;border-radius:3px"></a></td></tr></tbody></table><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></td></tr><tr><td style="word-wrap:break-word;font-size:0;padding:20px 22px 10px 25px"><p style="font-size:1px;margin:0 auto;border-top:1px dashed #ACACAC;width:100%"></p><!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px dashed #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"></td></tr></table><![endif]--></td></tr><tr><td style="word-wrap:break-word;font-size:0;padding:0 20px" align="center"><div style="cursor:auto;color:#000;font-family:Ubuntu,Helvetica,Arial,sans-serif;font-size:11px;line-height:22px;text-align:center"><p>B&#xED;bic vend&#xE9;gh&#xE1;zak - Nagybajom, Iskola k&#xF6;z, 7561 Magyarorsz&#xE1;g</p><p><a href="tel:36304336698">+36 30 433 6698</a></p></div></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>      </td></tr></table>      <![endif]--></div></body></html>`
}