using Bookverse.Persistence.Entities;
using Bookverse.Services.Interfaces;

using Microsoft.AspNetCore.Mvc;

namespace Bookverse.Controllers
{
    [ApiController]
	[Route("[controller]")]
	public class UsersController : ControllerBase
	{
		private readonly IUserServices _userServices;

		public UsersController(IUserServices userServices)
		{
			_userServices = userServices;
		}

		[HttpGet]
		public async Task<IEnumerable<User>> GetUsers()
		{
			return await _userServices.GetUsersAsync();
		}
	}
}
