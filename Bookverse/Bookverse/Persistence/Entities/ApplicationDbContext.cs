using Microsoft.EntityFrameworkCore;

namespace Bookverse.Persistence.Entities
{
	public class ApplicationDbContext: DbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{ 
		
		}

		public DbSet<User> Users { get; set; }
	}
}