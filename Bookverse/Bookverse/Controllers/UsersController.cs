using Microsoft.AspNetCore.Mvc;
using Bookverse.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bookverse.Persistence.Entities;

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
