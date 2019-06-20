import os
import sys
from subprocess import Popen, PIPE
from PIL import Image
from fractions import Fraction


def main():
	input_dir = os.path.expanduser(sys.argv[1])

	# using https://github.com/arnellebalane/imgur-upload-cli
	env = os.environ.copy()
	env['IMGUR_CLIENT_ID'] = 'e4926b6c1edd6c6'
	process = Popen([f'imgur-upload {input_dir}/*'], stdout=PIPE, shell=True, env=env)
	(output, err) = process.communicate()
	exit_code = process.wait()
	if exit_code != 0 or err:
		raise ValueError(f"Upload failed! code: {exit_code} err: {err}")

	output = output.decode().replace('\\n', '\n')
	output = output.split('\n')
	output = output[2:]  # skip two first lines
	urls = []
	for line in output:
		url = line.split('=>')[1][1:]
		urls.append(url)

	for idx, img in enumerate(os.listdir(input_dir)):
		with Image.open(f'{input_dir}/{img}') as img_data:
			width, height = img_data.size
			ratio = width/height
			fraction = Fraction(ratio)
			fraction = fraction.limit_denominator(100)
			width, height = fraction.numerator, fraction.denominator

		print("{src: '{}', height: {}, width: {}}".format(urls[idx], height, width))


if __name__ == "__main__":
	main()
