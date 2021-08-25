using System;
using System.Collections.Generic;
using System.IO;

namespace K1
{
	class Program
	{
		//static string FACULTY_1_PATH = "..\\..\\..\\onlyHeader.txt";
		//static string FACULTY_1_PATH = "..\\..\\..\\info.txt";
		static string FACULTY_1_PATH = "..\\..\\..\\info.txt";
		static string FACULTY_2_PATH = "..\\..\\..\\chem.txt";
		static string RESULTS_PATH = "..\\..\\..\\results.txt";
		static void Main(string[] args)
		{
			Faculty fac1 = InOutUtils.ReadFaculty(FACULTY_1_PATH);
			Faculty fac2 = InOutUtils.ReadFaculty(FACULTY_2_PATH);
			InOutUtils.PrintFaculty(fac1, RESULTS_PATH, "Pradiniai pirmo fakulteto duomenys");
			InOutUtils.PrintFaculty(fac2, RESULTS_PATH, "Pradiniai antro fakulteto duomenys");

			Faculty fac1Filtered = null;
			if (fac1 != null)
			{
				fac1Filtered = TaskUtils.Select(fac1);
				fac1Filtered.Sort();
				InOutUtils.PrintFaculty(fac1Filtered, RESULTS_PATH, "Studentai viršijantys reikiamą fakulteto kreditų skaičių");
			}
			Faculty fac2Filtered = null;
			if (fac1 != null)
			{
				fac2Filtered = TaskUtils.Select(fac2);
				fac2Filtered.Sort();
				InOutUtils.PrintFaculty(fac2Filtered, RESULTS_PATH, "Studentai viršijantys reikiamą fakulteto kreditų skaičių");
			}

			string conclusion = "Išvada: ";
			if (fac1Filtered != null && fac2 != null)
			{
				if (fac1Filtered == fac2Filtered) conclusion += "Fakultetuose yra vienodas kiekis kreditų skaičių viršijančių studentų";
				else if (fac1Filtered > fac2Filtered) conclusion += string.Format("\"{0}\" turi daugiau kreditų kiekį viršijančių studentų nei {1}", fac1Filtered.Title, fac2Filtered.Title);
				else conclusion += string.Format("\"{0}\" turi daugiau kreditų kiekį viršijančių studentų nei \"{1}\"", fac2Filtered.Title, fac1Filtered.Title);
			}
			else
			{
				conclusion += "Neįmanoma palyginti fakultetų nes vienas ar abudu duomenų failai buvo tušti";
			}
			InOutUtils.PrintHeader(RESULTS_PATH, conclusion);
		}
	}

	class Student
	{
		public string Name { get; set; }
		public string Surname { get; set; }
		public string Group { get; set; }
		private int[] modules;

		public Student(string surname, string name, string group, int[] modules)
		{
			Name = name;
			Surname = surname;
			Group = group;
			this.modules = new int[modules.Length];
			for (int i = 0; i < modules.Length; i++)
			{
				this.modules[i] = modules[i];
			}
		}

		public Student Clone()
		{
			return new Student(Surname, Name, Group, modules);
		}

		public int Sum(int ii = 0)
		{
			if (ii > modules.Length) return -1;
			if (ii == modules.Length - 1) return modules[ii];
			return modules[ii] + Sum(ii + 1);
		}

		public static bool operator >(Student s1, Student s2)
		{
			if (s1.Group.CompareTo(s2.Group) == 0)
			{
				if (s1.Surname.CompareTo(s2.Surname) > 0) return true;
			}
			else if (s1.Group.CompareTo(s2.Group) > 0) return true;
			return false;
		}

		public static bool operator <(Student s1, Student s2)
		{
			if (s1.Group.CompareTo(s2.Group) == 0)
			{
				if (s1.Surname.CompareTo(s2.Surname) < 0) return true;
			}
			else if (s1.Group.CompareTo(s2.Group) < 0) return true;
			return false;
		}

		public static bool operator ==(Student s1, Student s2)
		{
			if (ReferenceEquals(s1, null))
			{
				if (ReferenceEquals(s2, null))
				{
					return true;
				}
				return false;
			}
			if (ReferenceEquals(s2, null))
			{
				return false;
			}
			return s1.Group.CompareTo(s2.Group) == 0 && s1.Surname.CompareTo(s2.Surname) == 0;
		}

		public static bool operator !=(Student s1, Student s2)
		{
			return !(s1 == s2);
		}

		public override string ToString()
		{
			return string.Format("| {0,-15} | {1,-15} | {2,-15} | {3, 15} |", Name, Surname, Group, Sum());
		}
	}

	class Faculty
	{
		public string Title { get; set; }
		public int CreditCount { get; set; }
		public int StudentCount { get; private set; }
		private List<Student> students;
		public Faculty()
		{
			students = new List<Student>();
			StudentCount = 0;
		}

		public Faculty(string title, int creditCount) : this()
		{
			Title = title;
			CreditCount = creditCount;
		}
		public void AddStudent(Student stud)
		{
			students.Add(stud);
			StudentCount++;
		}
		public Student GetStudent(int ii)
		{
			if (ii >= 0 && ii < StudentCount && StudentCount > 0)
			{
				return students[ii];
			}
			return null;
		}

		public void Sort() // Select sort
		{
			for (int i = 0; i < students.Count - 1; i++)
			{
				int iMin = i;
				for (int j = i; j < students.Count; j++)
					if (students[j] < students[iMin])
						iMin = j;
				if (iMin > i)
				{
					Student temp = students[iMin];
					students[iMin] = students[i];
					students[i] = temp;
				}
			}
		}

		//public void Sort() // Bubble sort
		//{
		//	for (int i = 0; i < students.Count - 1; i++)
		//	{
		//		bool swaped = false;
		//		for (int j = 0; j < students.Count - 1 - i; j++)
		//		{
		//			if (students[j] > students[j +1])
		//			{
		//				Student temp = students[j];
		//				students[j] = students[j + 1];
		//				students[i] = temp;
		//				swaped = true;
		//			}
		//		}
		//		if (!swaped) return;
		//	}
		//}


		public static bool operator >(Faculty f1, Faculty f2)
		{
			return (f1.students.Count - f2.students.Count) > 0;
		}

		public static bool operator <(Faculty f1, Faculty f2)
		{
			return (f1.students.Count - f2.students.Count) < 0;
		}

		public static bool operator ==(Faculty f1, Faculty f2)
		{
			if (ReferenceEquals(f1, null))
			{
				if (ReferenceEquals(f2, null))
				{
					return true;
				}
				return false;
			}
			if (ReferenceEquals(f2, null))
			{
				return false;
			}
			return (f1.students.Count - f2.students.Count) == 0;
		}

		public static bool operator !=(Faculty f1, Faculty f2)
		{
			return !(f1 == f2);
		}

		public override string ToString()
		{
			string line = new string('-', 73) + "\r\n";
			string result = line;
			int leftAlignment = (71 - Title.Length) / 2;
			int rightAlignment = 71 - leftAlignment - Title.Length;
			result += string.Format("|{0}{1}{2}|\r\n", new string(' ', leftAlignment), Title, new string(' ', rightAlignment));
			result += line;
			if (students.Count > 0)
			{
				result += string.Format("| {0,-15} | {1,-15} | {2,-15} | {3,-15} |\r\n", "Vardas", "Pavardė", "Grupė", "Kreditų sk.");
				result += line;
				for (int i = 0; i < StudentCount; i++)
					result += students[i] + "\r\n";
			}
			else
			{
				string noStudentsTitle = "Šiame fakultete nėra studentų";
				leftAlignment = (71 - noStudentsTitle.Length) / 2;
				rightAlignment = 71 - leftAlignment - noStudentsTitle.Length;
				result += string.Format("|{0}{1}{2}|\r\n", new string(' ', leftAlignment), noStudentsTitle, new string(' ', rightAlignment));
			}
			result += line;
			return result;
		}

	}

	static class InOutUtils
	{
		public static Faculty ReadFaculty(string fileName)
		{
			Faculty faculty = new Faculty();
			using (StreamReader sr = new StreamReader(fileName))
			{
				string line = sr.ReadLine();
				if (line == "")
					return null;
				string[] parts = line.Split(", ");

				faculty.Title = parts[0];
				faculty.CreditCount = int.Parse(parts[1]);

				while ((line = sr.ReadLine()) != null)
				{

					parts = line.Split(", ");
					int[] modules = new int[parts.Length - 3];
					for (int i = 3, j = 0; i < parts.Length; i++, j++)
					{
						modules[j] = int.Parse(parts[i]);
					}
					faculty.AddStudent(new Student(parts[0], parts[1], parts[2], modules));
				}
			}
			return faculty;
		}


		public static void PrintFaculty(Faculty faculty, string fileName, string header)
		{
			using (StreamWriter sw = new StreamWriter(fileName, true))
			{
				sw.WriteLine();
				sw.WriteLine(header);
				sw.WriteLine(faculty == null ? "Faile nėra duomenų" : faculty.ToString());
			}
		}

		public static void PrintHeader(string fileName, string header)
		{
			using (StreamWriter sw = new StreamWriter(fileName, true))
			{
				sw.WriteLine();
				sw.WriteLine(header);
				sw.WriteLine();
			}
		}
	}

	static class TaskUtils
	{
		public static Faculty Select(Faculty faculty)
		{
			Faculty selected = new Faculty(faculty.Title, faculty.CreditCount);
			if (faculty.StudentCount > 0)
			{
				for (int i = 0; i < faculty.StudentCount; i++)
				{
					if (faculty.GetStudent(i).Sum() > faculty.CreditCount)
					{
						selected.AddStudent(faculty.GetStudent(i).Clone());
					}
				}
			}
			return selected;
		}
	}
}
