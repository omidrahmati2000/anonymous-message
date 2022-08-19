import { Injectable, NotFoundException } from '@nestjs/common'
import { UpdateLinkDto } from './dto/update-link.dto';
import { User } from '../users/entities/user.entity';
import { CreateLinkTransformer } from './transformer/createLink.transformer';
import { Link } from './entities/link.entity';
import { LinksRepository } from './links.repository';

@Injectable()
export class LinksService {
  constructor(private readonly linkRepository: LinksRepository) {}

  async generate(user: User): Promise<Link> {
    const link: Link = CreateLinkTransformer.toLinkEntity(user);
    return await this.linkRepository.create(link);
  }

  findAll() {
    return `This action returns all links`;
  }

  findOne(id: number) {
    return `This action returns a #${id} link`;
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }

  async findByLink(link: string): Promise<Link> {
    const foundedLink: Link = await this.linkRepository.getLinkByLink(link);
    if (!foundedLink) {
      throw new NotFoundException('This link not exist');
    }
    return foundedLink;
  }
}
