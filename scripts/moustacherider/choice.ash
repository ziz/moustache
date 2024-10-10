void main(int choice, string page)
{
	switch (choice) {
		case 219: 
			// The Furtivity of My City: fight sleaze hobo
			run_choice(1); 
			break;
		case 223: 
			// Getting Clubbed: flimflam if crowded, get inside otherwise
			run_choice(3);
			break;
		case 224:
		  // Exclusive!: Pick several fights
			run_choice(2);
			break;
		case 205:
			// Van, Damn: don't fight Chester
			run_choice(2); 
			break;
	}
	if (choice == 218) {	
		wait(60 + 5 * get_property("_cognac_currentPlayers").to_int());
	}
}