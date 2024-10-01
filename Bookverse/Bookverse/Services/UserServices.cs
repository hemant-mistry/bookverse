using Bookverse.Persistence.Repository.Interfaces;
using Bookverse.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bookverse.Persistence.Entities;

namespace Bookverse.Services
{
	public class UserServices : IUserServices
	{
		private readonly IUserRepository _userRepository;

		public UserServices(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

		public async Task<IEnumerable<User>> GetUsersAsync()
		{
			return await _userRepository.GetUsersAsync();
		}
	}
}
