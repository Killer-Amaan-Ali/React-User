@echo off
cls
Color 0C
title GitHub Pushing
set /p COM=Commit message: 
git add *
git commit -m "%COM%"
@REM git pull origin main
git push origin main
git status
@echo ----------------------------------------------------------------------------------------

Color 0A
@echo Pushed and Committed succesfully (%COM%)

@echo ----------------------------------------------------------------------------------------
setlocal
:PROMPT
SET /P EXIT=Exit? (y/[n])
IF /I "%EXIT%" NEQ "Y" GOTO EEND

exit
:EEND
SET /P RETRY=Retry? (y/[n])
IF /I "%RETRY%" NEQ "Y" GOTO REND
push
:REND


endlocal