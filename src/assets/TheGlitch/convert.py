import imageio
import os
from pathlib import Path

def convert_video_to_gif(input_path, output_path=None, fps=10, scale=1.0, loop=0):
    """
    Convert a video file to looping GIF format.
    
    Args:
        input_path (str): Path to the input video file
        output_path (str, optional): Path for the output GIF file. If None, uses same name as input with .gif extension
        fps (int, optional): Frames per second for the output GIF. Default is 10
        scale (float, optional): Scale factor for the output GIF dimensions. Default is 1.0 (no scaling)
        loop (int, optional): Number of times to loop the GIF. 0 means loop forever (default)
    
    Returns:
        str: Path to the created GIF file
    """
    # If no output path specified, create one based on input filename
    if output_path is None:
        input_file = Path(input_path)
        output_path = str(input_file.with_suffix('.gif'))
    
    # Read the video file
    reader = imageio.get_reader(input_path)
    
    # Get video metadata
    fps_source = reader.get_meta_data()['fps']
    if fps > fps_source:
        fps = fps_source
    
    # Calculate frame interval for desired FPS
    skip_frames = int(fps_source / fps)
    
    # Collect frames
    frames = []
    for i, frame in enumerate(reader):
        if i % skip_frames == 0:
            # Scale the frame if needed
            if scale != 1.0:
                import cv2
                import numpy as np
                h, w = frame.shape[:2]
                frame = cv2.resize(frame, (int(w * scale), int(h * scale)))
            frames.append(frame)
    
    # Save as GIF with loop parameter
    imageio.mimsave(
        output_path, 
        frames, 
        fps=fps, 
        loop=0  # 0 means loop forever
    )
    
    print(f"Looping GIF created successfully at: {output_path}")
    return output_path

if __name__ == "__main__":
    import argparse
    
    parser = argparse.ArgumentParser(description="Convert video to looping GIF")
    parser.add_argument("input", help="Input video file path")
    parser.add_argument("-o", "--output", help="Output GIF file path")
    parser.add_argument("-f", "--fps", type=int, default=10, help="Frames per second (default: 10)")
    parser.add_argument("-s", "--scale", type=float, default=1.0, help="Scale factor for dimensions (default: 1.0)")
    parser.add_argument("-l", "--loop", type=int, default=0, help="Number of loops (0 means infinite, default)")
    
    args = parser.parse_args()
    
    convert_video_to_gif(args.input, args.output, args.fps, args.scale, args.loop)