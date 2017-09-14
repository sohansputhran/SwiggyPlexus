using SwiggyPlexusApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SwiggyPlexusApi.Controllers
{
    [RoutePrefix("api/Data")]
    public class DataController : ApiController
    {
        [HttpGet]
        [Route("GetRestaurants")]
        public IEnumerable<Restaurant> GetRestaurants()
        {
            List<Restaurant> restaurants = new List<Restaurant>();

            restaurants.Add(new Restaurant { RestaurantId = 1, Image = "../../assets/images/logos/empire.jpg", Name = "Empire", Location = "Assam", Rating = 5 });
            restaurants.Add(new Restaurant { RestaurantId = 2, Image = "../../assets/images/logos/green_leaf.png", Name = "Juice Maker", Location = "Mysuru", Rating = 4 });
            restaurants.Add(new Restaurant { RestaurantId = 3, Image = "../../assets/images/logos/empire.jpg", Name = "Bowl Company", Location = "Bhopal", Rating = 3 });

            return restaurants;
        }

        [HttpGet]
        [Route("GetCoursesForRestaurants/{restraurantId}")]
        public IEnumerable<Course> GetCoursesForRestaurants(int restraurantId)
        {
            List<Course> courses = new List<Course>();

            if (restraurantId == 1)
            {
                courses.Add(new Course { CourseId = 1, Name = "Main Course", Image = "../../assets/images/maincourse/golden.jpg" });
                courses.Add(new Course { CourseId = 2, Name = "Starter", Image = "../../assets/images/starters/tikka.jpg" });
                courses.Add(new Course { CourseId = 3, Name = "Desserts", Image =  "../../assets/images/dessert/choclatecake.png" });
                courses.Add(new Course { CourseId = 4, Name = "Drinks", Image = "" });
            }
            else if (restraurantId == 2)
            {
                courses.Add(new Course { CourseId = 1, Name = "Main Course", Image = "../../assets/images/maincourse/golden.jpg" });
                courses.Add(new Course { CourseId = 2, Name = "Starter", Image =  "../../assets/images/starters/tikka.jpg" });
                courses.Add(new Course { CourseId = 5, Name = "Desserts", Image = "../../assets/images/dessert/choclatecake.png" });
                courses.Add(new Course { CourseId = 6, Name = "Drinks", Image = "../../assets/images/drinks/beer.jpg" });
            }
            else
            {
                courses.Add(new Course { CourseId = 1, Name = "Main Course", Image = "../../assets/images/maincourse/golden.jpg" });
                courses.Add(new Course { CourseId = 2, Name = "Starter", Image =  "../../assets/images/starters/tikka.jpg" });
                courses.Add(new Course { CourseId = 3, Name = "Desserts", Image = "../../assets/images/dessert/choclatecake.png" });
            }

            return courses;
        }

        [HttpGet]
        [Route("GetItemsForCourse/{courseId}")]
        public IEnumerable<Item> GetItemsForCourse(int courseId)
        {
            List<Item> items = new List<Item>();

            if (courseId == 1)
            {
                items.Add(new Item { ItemId = 1, Image = "../../assets/images/maincourse/butterchicken.jpg", Name = "Butter Chicken", Price = 200, Rating = 5, IsRecommended = true });
                items.Add(new Item { ItemId = 2, Image = "../../assets/images/maincourse/friedrice.jpg", Name = "Fried Rice", Price = 150, Rating = 4, IsRecommended = false });
                items.Add(new Item { ItemId = 3, Image = "../../assets/images/maincourse/chickenmughlai.jpg", Name = "Chicken Mughlai", Price = 220, Rating = 3, IsRecommended = true });
                items.Add(new Item { ItemId = 4, Image = "../../assets/images/maincourse/pannerkadai.jpg", Name = "Panner Kadai", Price = 150, Rating = 4, IsRecommended = true });
                items.Add(new Item { ItemId = 5, Image = "../../assets/images/maincourse/kofta.jpg", Name = "Kofta", Price = 130, Rating = 2, IsRecommended = false });
            }
            else if (courseId == 2)
            {
                items.Add(new Item { ItemId = 6, Image = "../../assets/images/starters/tikka.jpg", Name = "Chicken Tikka", Price = 200, Rating = 5, IsRecommended = true });
                items.Add(new Item { ItemId = 7, Image = "../../assets/images/starters/chickenlollipop.jpg", Name = "Chicken Lollipop", Price = 150, Rating = 4, IsRecommended = true });
                items.Add(new Item { ItemId = 8, Image = "../../assets/images/starters/chillypanner.jpg", Name = "Paneer Chilly", Price = 220, Rating = 3, IsRecommended = false });
                items.Add(new Item { ItemId = 9, Image = "../../assets/images/starters/manchuriandry.jpg", Name = "Manchurian Dry", Price = 150, Rating = 4, IsRecommended = true });
            }
            else if (courseId == 3)
            {
                items.Add(new Item { ItemId = 10, Image = "../../assets/images/dessert/brownie.jpg", Name = "Brownie", Price = 100, Rating = 5, IsRecommended = false });
                items.Add(new Item { ItemId = 11, Image = "../../assets/images/dessert/gulabjammun.jpg", Name = "Gulab Jamun", Price = 50, Rating = 4, IsRecommended = true });
                items.Add(new Item { ItemId = 12, Image = "../../assets/images/dessert/icecream.jpg", Name = "Ice Cream", Price = 40, Rating = 3, IsRecommended = true });
                items.Add(new Item { ItemId = 13, Image = "../../assets/images/dessert/pastry.jpg", Name = "Pastry", Price = 150, Rating = 4, IsRecommended = false });
            }
            else if (courseId == 4)
            {
                items.Add(new Item { ItemId = 14, Image = "../../assets/images/drinks/vodka.jpg", Name = "Vodka", Price = 200, Rating = 3, IsRecommended = false });
                items.Add(new Item { ItemId = 15, Image = "../../assets/images/drinks/beer.jpg", Name = "Beer", Price = 150, Rating = 4, IsRecommended = true });
                items.Add(new Item { ItemId = 16, Image = "../../assets/images/drinks/coke.jpg", Name = "Coke", Price = 30, Rating = 4, IsRecommended = true });
            }
            else if (courseId == 5)
            {
                items.Add(new Item { ItemId = 17, Image = "", Name = "Chicken Salad", Price = 200, Rating = 5, IsRecommended = true });
                items.Add(new Item { ItemId = 18, Image = "", Name = "Veg Salad", Price = 150, Rating = 2, IsRecommended = true });
                items.Add(new Item { ItemId = 19, Image = "", Name = "Healthy Salad", Price = 220, Rating = 1, IsRecommended = false });
            }
            else
            {
                items.Add(new Item { ItemId = 20, Image = "", Name = "Orange", Price = 50, Rating = 3, IsRecommended = true });
                items.Add(new Item { ItemId = 21, Image = "", Name = "Apple", Price = 60, Rating = 5, IsRecommended = false });
                items.Add(new Item { ItemId = 22, Image = "", Name = "Mango", Price = 50, Rating = 4, IsRecommended = true });
                items.Add(new Item { ItemId = 23, Image = "", Name = "Water Melon", Price = 30, Rating = 2, IsRecommended = true });
            }

            return items;
        }
    }
}