using Bookverse.Persistence.Entities;

namespace Bookverse.Persistence.Repository.Interfaces
{
	// Interface for the UserRepository
	public interface IUserRepository
	{
		Task<IEnumerable<User>> GetUsersAsync();
	}
}
