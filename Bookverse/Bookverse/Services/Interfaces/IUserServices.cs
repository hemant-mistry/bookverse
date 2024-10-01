using System.Collections.Generic;
using System.Threading.Tasks;
using Bookverse.Persistence.Entities;

namespace Bookverse.Services.Interfaces
{
	public interface IUserServices
	{
		Task<IEnumerable<User>> GetUsersAsync();
	}
}
