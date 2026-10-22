namespace App
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i =0; i<5; i++)
            {
                Console.WriteLine("Haslo nr " + (i+1) + ": ");
                Console.WriteLine(LosujHaslo());
                Console.WriteLine();

            }
        }
         /****
         * nazwa funkcji: LosujHaslo
         * opis funkcji: tworzy haslo losujac znaki i wstawiajac je w losowe miejsca
         * parametry: brak
         * wartość zwracana: hasloKoncowe - haslo w zmiennej napisowej
         * autor: 12345678901
         * ****/
        static string LosujHaslo()
        {
            Random rand = new Random();
            char[] male = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            char[] duze = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
            char[] cyfry = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            char[] dialektyczne = ['ą', 'ę', 'ł', 'ń', 'ó', 'ś', 'ż', 'ź', 'Ą', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ż', 'Ź'];
            char[] specjalne = ['!', '@', '#', '$', '%', '^', '&', '&', '*', '(', ')'];
            List<char> haslo = new List<char> ();
            string hasloKoncowe = "";
            for (int i = 0; i <3; i++)
            {
                char znak = male[rand.Next(male.Length)];
                haslo.Add(znak);
                int miejsce = rand.Next(haslo.Count-1);
                if (haslo[miejsce] != znak) {
                    for (int j = haslo.Count - 1; j > miejsce; j--)
                    {
                        char przemien = haslo[j];
                        haslo[j] = haslo[j - 1];
                        haslo[j - 1] = przemien;
                    }
                }

                //Console.WriteLine(znak + ", " + miejsce.ToString());
            }

            for (int i = 0; i < 3; i++)
            {

                char znak = duze[rand.Next(0, duze.Length)];
                haslo.Add(znak);
                int miejsce = rand.Next(haslo.Count - 1);
                if (haslo[miejsce] != znak)
                {
                    for (int j = haslo.Count - 1; j > miejsce; j--)
                    {
                        char przemien = haslo[j];
                        haslo[j] = haslo[j - 1];
                        haslo[j - 1] = przemien;
                    }
                }

                //Console.WriteLine(znak + ", " + miejsce.ToString());

            }

           
            for (int i = 0; i < 2; i++)
            {

                char znak = cyfry[rand.Next(0, cyfry.Length)];
                haslo.Add(znak);
                int miejsce = rand.Next(haslo.Count - 1);
                if (haslo[miejsce] != znak)
                {
                    for (int j = haslo.Count - 1; j > miejsce; j--)
                    {
                        char przemien = haslo[j];
                        haslo[j] = haslo[j - 1];
                        haslo[j - 1] = przemien;
                    }
                }

                //Console.WriteLine(znak + ", " + miejsce.ToString());

            }
            
            for (int i = 0; i < 2; i++)
            {

                char znak = dialektyczne[rand.Next(0, dialektyczne.Length)];
                haslo.Add(znak);
                int miejsce = rand.Next(haslo.Count - 1);
                if (haslo[miejsce] != znak)
                {
                    for (int j = haslo.Count - 1; j > miejsce; j--)
                    {
                        char przemien = haslo[j];
                        haslo[j] = haslo[j - 1];
                        haslo[j - 1] = przemien;
                    }
                }

                //Console.WriteLine(znak + ", " + miejsce.ToString());

            }
            
            for (int i = 0; i < 2; i++)
            {

                char znak = specjalne[rand.Next(0, specjalne.Length)];
                haslo.Add(znak);
                int miejsce = rand.Next(haslo.Count - 1);
                if (haslo[miejsce] != znak)
                {
                    for (int j = haslo.Count - 1; j > miejsce; j--)
                    {
                        char przemien = haslo[j];
                        haslo[j] = haslo[j - 1];
                        haslo[j - 1] = przemien;
                    }
                }

                //Console.WriteLine(znak + ", " + miejsce.ToString());

            }

            for (int i = 0;i < haslo.Count; i++)
            {
                hasloKoncowe += haslo[i];
            }
            //Console.WriteLine(hasloKoncowe);
            return (hasloKoncowe);
        }
    }
}
