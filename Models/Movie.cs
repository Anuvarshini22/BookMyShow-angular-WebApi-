using System.ComponentModel.DataAnnotations;

namespace BookMyShow.Entities
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Language { get; set; }
        public string Genre { get; set; } 
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public int price { get; set; }
        public string CreatedDate { get; set; }
        public string UpdatedDate { get; set; }
        public string DeletedDate { get; set; }
     
        public bool IsDeleted { get; set; }



    }
   /* public enum MovieGenre ///add as seprate file
    {
        Action,
        Animated,
        Comedy,
        Horror,
        Love,
        Thriller
    }*/
}
