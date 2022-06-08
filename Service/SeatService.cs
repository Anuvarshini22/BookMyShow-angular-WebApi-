using AutoMapper;
using BookMyShow.Context;
using BookMyShow.Contracts;
using BookMyShow.Entities;
using BookMyShow.ViewModel;
using Dapper;
using System.Data;
using System.Data.SqlClient;

namespace BookMyShow.Service
{
    public class SeatService:ISeatService
    {
        private readonly IDbConnection _context;
        private readonly IMapper _mapper;
        public SeatService(IConfiguration configuration, IMapper mapper)
        {
            _context = new SqlConnection(configuration.GetConnectionString("SqlConnection"));
            _mapper = mapper;

        }
        public IEnumerable<SeatViewModel> GetSeat()
        {
            var query = "SELECT * FROM Seat";
            var seatViewModel = _context.Query<Seat>(query).ToList();
            return _mapper.Map<IEnumerable<SeatViewModel>>(seatViewModel);
           }
        public bool InsertSeat(Seat seat)
        {
           return (_context.Execute("INSERT INTO Seat(Number,Status,ShowId,TheatreId,MovieId,CreatedDate,UpdatedDate,DeletedDate,IsDeleted)VALUES(@Number,@Status,@ShowId,@TheatreId,@MovieId,@CreatedDate,@UpdatedDate,@DeletedDate,@IsDeleted)", new { Number=seat.Number, Status=seat.Status, ShowId=seat.ShowId, TheatreId=seat.TheatreId, MovieId=seat.MovieId,  CreatedDate=seat.CreatedDate, UpdatedDate=seat.UpdatedDate, DeletedDate=seat.DeletedDate, IsDeleted=seat.IsDeleted }))==1;
            
        }
        public bool GetSeatStatus(int id)
        {
            var query = "SELECT Status FROM Seat WHERE Id=@Id ";
            var seat =  _context.QuerySingleOrDefault<bool>(query, new { id });
                if (seat)
                {
                  _context.Execute("UPDATE Seat SET Status='false' WHERE Id=id");
                    return true;
                }
            return false;
        }
        public SeatViewModel GetSeatById(int id)
        {
            var query = "SELECT * FROM Seat where Id=@Id";
            var seatViewModel= _context.Query<Seat>(query, new { Id = id }).Single();
            return _mapper.Map<SeatViewModel>(seatViewModel);
        }
        public bool UpdateSeat(Seat seat)
        {
           return (_context.Execute("UPDATE Seat SET Number=@Number,Status=@Status,ShowId=@ShowId,TheatreId=@TheatreId,MovieId=@MovieId,TicketId=@TicketId,CreatedDate=@CreatedDate,UpdatedDate=@UpdatedDate,DeletedDate=@DeletedDate,IsDeleted=@IsDeleted where Id=@Id",seat)==1);
            
        }
        public bool DeleteSeat(int id)
        {
            return (_context.Execute("DELETE FROM Seat where Id=@id", new {id})==1);
            
        }
        public List<SeatViewModel> GetSeatByShow(int id)
        {
            var query = "SELECT * FROM Seat where ShowId=@ShowId";
            var seatViewModel= _context.Query<Seat>(query, new { ShowId = id }).ToList();
            return _mapper.Map<List<SeatViewModel>>(seatViewModel);
        }
    }
}
