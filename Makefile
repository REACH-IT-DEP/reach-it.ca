PACKAGES:=$(wildcard archlinux/reach-it/os/x86_64/*.pkg.tar.zst)
SIGS:=$(patsubst %.pkg.tar.zst,%.pkg.tar.zst.sig, $(PACKAGES))

deploy:update add commit push
	@echo 'WEBSITE DONE!';

add:
	@git add -A

commit:
	@git commit -a -m "UPDATE";

pull:
	@git pull;

push:
	@git push;

update: $(SIGS)
	@repo-add ./archlinux/reach-it/os/x86_64/reach-it.db.tar.gz ./archlinux/reach-it/os/x86_64/*.pkg.tar.zst
	@echo -n $(date +%s) > ./archlinux/lastupdate
	@echo -n $(date +%s) > ./archlinux/lastsync

%.pkg.tar.zst.sig: %.pkg.tar.zst
	@gpg --default-key 40888039 --detach-sig $<

.PHONY: commit deploy pull push update
