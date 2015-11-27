using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace SuppleAnglia.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description pagee.";

            return View();
        }

        [HttpGet]
        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";
            return View();
        }

        [HttpPost]
        public string Contact(PersonModel param)
        {
            MailMessage mail = new MailMessage();
            mail.To.Add("lukaszdziadek.jaw@gmail.com");
            mail.From = new MailAddress(param.EmailAddress);
            mail.Subject = "Wyslano ze strony testowej ;)";
            string Body = param.Message;
            mail.Body = Body;
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential("grandit.projekt@gmail.com", "nati1988");
            smtp.EnableSsl = true;
            smtp.Send(mail);

            return "sd";
        }


    }
}