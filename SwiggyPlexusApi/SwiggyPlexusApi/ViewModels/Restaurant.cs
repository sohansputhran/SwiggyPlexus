using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SwiggyPlexusApi.ViewModels
{
    public class Restaurant
    {
        public int RestaurantId { get; set; }

        public string Name { get; set; }

        public int Rating { get; set; }

        public string Image { get; set; }

        public string Location { get; set; }
    }
}