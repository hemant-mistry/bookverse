using Bookverse.Persistence.Repository.Interfaces;
using Bookverse.Persistence.Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Bookverse.Persistence.Repository
{
	public class UserRepository : IUserRepository
	{
		private readonly ApplicationDbContext _context;

		public UserRepository(ApplicationDbContext context)
		{
			_context = context;
		}

		public async Task<IEnumerable<User>> GetUsersAsync()
		{
			// Fetch users from the Users table asynchronously
			return await _context.Users.ToListAsync();
		}
	}
}
