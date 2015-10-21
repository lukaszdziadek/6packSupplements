using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SuppleAnglia.Startup))]
namespace SuppleAnglia
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
