using System.ComponentModel.DataAnnotations;

namespace Bookverse.Persistence.Entities
{
	public class User
	{
		[Key]
		public int Id { get; set; }

		public string? Name { get; set; }

	}
}
