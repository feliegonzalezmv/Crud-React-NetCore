using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class SeedDB
    {
        private readonly CompaniesDBContext _context;

        public SeedDB(CompaniesDBContext context)
        {
            _context = context;
        }


        public async Task SeedAsync()
        {
            await _context.Database.EnsureCreatedAsync();
            await CheckCompaniesAsync();
            await CheckValidCompaniesAsync();

        }

        private async Task CheckValidCompaniesAsync()
        {
            if (!_context.DValidCompany.Any())
            {
                AddValidCompany("900674336", "Umbrella Corporation");
                AddValidCompany("811033098 ", "Massive Dynamic");
                await _context.SaveChangesAsync();
            }
        }

        private async Task CheckCompaniesAsync()
        {
            if (!_context.DCompany.Any())
            {
                _context.DCompany.Add(new DCompany
                {
                    identification = "900674336",
                    identificationType= "NIT",
                    companyName = "Umbrella Corporation",
                    email = "umbrella@corporation.com",
                    autorizeSendMessagesCellphone = true,
                    autorizeSendMessagesEmail = true
                });

                _context.DCompany.Add(new DCompany
                {
                    identification = "811033098",
                    identificationType = "C",
                    firstName = "Juan",
                    secondName = "Felipe",
                    firstLastName = "González",
                    secondLastName = "Ortiz",
                    email = "felipegonzalezmv@hotmail.com",
                    autorizeSendMessagesCellphone = true,
                    autorizeSendMessagesEmail = true
                });
                await _context.SaveChangesAsync();
            }
        }




        private void AddValidCompany(string id, string name)
        {
            _context.DValidCompany.Add(new DValidCompany { identification = id, companyName = name });
        }


    }
}
