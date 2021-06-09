using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DCompany",
                columns: table => new
                {
                    identification = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    identificationType = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    companyName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    firstName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    secondName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    firstLastName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    secondLastName = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    autorizeSendMessagesCellphone = table.Column<bool>(type: "bit", nullable: false),
                    autorizeSendMessagesEmail = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DCompany", x => x.identification);
                });

            migrationBuilder.CreateTable(
                name: "DValidCompany",
                columns: table => new
                {
                    identification = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    companyName = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DValidCompany", x => x.identification);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DCompany");

            migrationBuilder.DropTable(
                name: "DValidCompany");
        }
    }
}
