using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SuppleAnglia.Controllers
{
    public class ShopController : Controller
    {
        //
        // GET: /Shop/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ProductInfo()
        {
            return View();
        }
	}
}