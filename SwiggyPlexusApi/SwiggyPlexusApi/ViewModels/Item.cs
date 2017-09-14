using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SwiggyPlexusApi.ViewModels
{
    public class Item
    {
        public int ItemId { get; set; }

        public string Name { get; set; }

        public int Rating { get; set; }

        public string Image { get; set; }

        public int Price { get; set; }

        public bool IsRecommended { get; set; }
    }
}