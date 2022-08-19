import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './entities/link.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LinksRepository {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
  ) {}

  async create(link: Link): Promise<Link> {
    return await this.linkRepository.save(link);
  }

  async getLinkByLink(link: string): Promise<Link> {
    return await this.linkRepository.findOneBy({ link: link });
  }
}
