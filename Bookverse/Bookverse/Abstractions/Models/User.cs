using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Bookverse.Abstractions.Models
{
	public class User
	{
		public int Id { get; set; }

		public string? Name { get; set; }

	}
}

