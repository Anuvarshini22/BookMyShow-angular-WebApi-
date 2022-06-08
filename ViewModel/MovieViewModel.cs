namespace BookMyShow.ViewModel
{

    //use automapper to map models ...use this view models//..

    public class MovieViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Language { get; set; }
        public string Genre { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
    }
    /*public enum MovieGenre  //remove
    {
        Action,
        Animated,
        Comedy,
        Horror,
        Love,
        Thriller
    }*/
}
