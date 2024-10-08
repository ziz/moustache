void main(int choice, string page)
{
	if (choice == 218) {	
		wait(60 + 5 * get_property("_cognac_currentPlayers").to_int());
	}
}