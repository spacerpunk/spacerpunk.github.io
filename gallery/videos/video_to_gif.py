from moviepy.editor import *

divide = 2

def Video_To_Gif(video):
    clip = VideoFileClip(video)
    size = [clip.size[0] / divide, clip.size[1] / divide]
    print(size)
    print(type(size))
    clip = clip.resize(size)
    clip.write_gif("013.gif", fps=16, colors=128, fuzz=1,logger='bar')

Video_To_Gif("013.mp4")
