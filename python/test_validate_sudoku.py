from validate_sudoku import Sudoku
import unittest


class TestSudoku(unittest.TestCase):
    def test_empty_sudoku(self):
        instance = Sudoku([])
        self.assertEqual(instance.is_valid(), False, "An empty sudoku is not valid")

    def test_a_good_9x9_sudoku(self):
        instance = Sudoku(
            [
                [7, 8, 4, 1, 5, 9, 3, 2, 6],
                [5, 3, 9, 6, 7, 2, 8, 4, 1],
                [6, 1, 2, 4, 3, 8, 7, 5, 9],
                [9, 2, 8, 7, 1, 5, 4, 6, 3],
                [3, 5, 7, 8, 4, 6, 1, 9, 2],
                [4, 6, 1, 9, 2, 3, 5, 8, 7],
                [8, 7, 6, 3, 9, 4, 2, 1, 5],
                [2, 4, 3, 5, 6, 1, 9, 7, 8],
                [1, 9, 5, 2, 8, 7, 6, 3, 4],
            ]
        )
        self.assertEqual(instance.is_valid(), True, "Good 9x9 sudoku")

    def test_a_bad_9x9_sudoku(self):
        instance = Sudoku(
            [
                [0, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
            ]
        )
        self.assertEqual(instance.is_valid(), False, "A Complete, but invalid sudoku")

    def test_a_good_4x4_sudoku(self):
        instance = Sudoku([[1, 4, 2, 3], [3, 2, 4, 1], [4, 1, 3, 2], [2, 3, 1, 4]])
        self.assertEqual(instance.is_valid(), True, "A good 4x4 sudoku")

    def test_an_uneven_sudoku(self):
        instance = Sudoku([[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 4], [1]])
        self.assertEqual(instance.is_valid(), False, "Unbalanced sudoku")


if __name__ == "__main__":
    unittest.main()
