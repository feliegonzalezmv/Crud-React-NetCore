// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Models;

namespace WebAPI.Migrations
{
    [DbContext(typeof(CompaniesDBContext))]
    partial class CompaniesDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPI.Models.DCompany", b =>
                {
                    b.Property<string>("identification")
                        .HasColumnType("nvarchar(30)");

                    b.Property<bool>("autorizeSendMessagesCellphone")
                        .HasColumnType("bit");

                    b.Property<bool>("autorizeSendMessagesEmail")
                        .HasColumnType("bit");

                    b.Property<string>("companyName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("firstLastName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("firstName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("identificationType")
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("secondLastName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("secondName")
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("identification");

                    b.ToTable("DCompany");
                });

            modelBuilder.Entity("WebAPI.Models.DValidCompany", b =>
                {
                    b.Property<string>("identification")
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("companyName")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("identification");

                    b.ToTable("DValidCompany");
                });
#pragma warning restore 612, 618
        }
    }
}
