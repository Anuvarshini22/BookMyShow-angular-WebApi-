namespace BookMyShow.ViewModel
{
    public class ShowViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public int TheatreId { get; set; }
        public int MovieId { get; set; }
        public int Capacity { get; set; }
        public int SeatsAvailable { get; set; }
    }
}
